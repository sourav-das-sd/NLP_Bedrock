provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "nl2sql_bucket" {
  bucket = "bedrock-nl2sql-bucket"
  acl    = "private"
}

resource "aws_lambda_function" "nl2sql_function" {
  function_name = "nl2sqlFunction"
  s3_bucket     = aws_s3_bucket.nl2sql_bucket.bucket
  s3_key        = "lambda_function.zip"
  handler       = "index.handler"
  runtime       = "nodejs14.x"

  environment {
    DB_CONNECTION_STRING = var.db_connection_string
  }

  depends_on = [aws_s3_bucket.nl2sql_bucket]
}

resource "aws_api_gateway_rest_api" "nl2sql_api" {
  name        = "nl2sqlApi"
  description = "API for NL2SQL service"
}

resource "aws_api_gateway_resource" "nl2sql_resource" {
  rest_api_id = aws_api_gateway_rest_api.nl2sql_api.id
  parent_id   = aws_api_gateway_rest_api.nl2sql_api.root_resource_id
  path_part   = "nl2sql"
}

resource "aws_api_gateway_method" "nl2sql_method" {
  rest_api_id   = aws_api_gateway_rest_api.nl2sql_api.id
  resource_id   = aws_api_gateway_resource.nl2sql_resource.id
  http_method   = "POST"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "nl2sql_integration" {
  rest_api_id             = aws_api_gateway_rest_api.nl2sql_api.id
  resource_id             = aws_api_gateway_resource.nl2sql_resource.id
  http_method             = aws_api_gateway_method.nl2sql_method.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.nl2sql_function.invoke_arn
}

output "api_endpoint" {
  value = "${aws_api_gateway_rest_api.nl2sql_api.execution_arn}/nl2sql"
}