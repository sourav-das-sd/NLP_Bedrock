#!/bin/bash

# This script automates the deployment process of the application.

set -e

# Define variables
APP_NAME="bedrock-nl2sql"
DEPLOY_DIR="/var/www/$APP_NAME"
SOURCE_DIR="$(pwd)/src"

# Function to deploy the application
deploy() {
    echo "Deploying $APP_NAME..."

    # Create deployment directory if it doesn't exist
    if [ ! -d "$DEPLOY_DIR" ]; then
        mkdir -p "$DEPLOY_DIR"
    fi

    # Copy source files to deployment directory
    cp -r "$SOURCE_DIR/"* "$DEPLOY_DIR/"

    echo "$APP_NAME deployed successfully to $DEPLOY_DIR"
}

# Function to clean up old deployments
cleanup() {
    echo "Cleaning up old deployments..."
    rm -rf "$DEPLOY_DIR/*"
    echo "Old deployments cleaned up."
}

# Main script execution
cleanup
deploy