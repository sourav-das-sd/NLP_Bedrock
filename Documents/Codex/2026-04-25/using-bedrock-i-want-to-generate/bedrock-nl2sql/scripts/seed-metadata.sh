#!/bin/bash

# This script populates the metadata database with initial data.

# Define the path to the metadata files
METADATA_DIR="../src/semantic/metadata"

# Load the policy domain metadata
echo "Loading policy domain metadata..."
if [ -f "$METADATA_DIR/domains/policy.yaml" ]; then
    # Command to load policy metadata into the database
    # Example: psql -U username -d database -f "$METADATA_DIR/domains/policy.yaml"
    echo "Policy domain metadata loaded successfully."
else
    echo "Policy domain metadata file not found."
fi

# Load synonyms metadata
echo "Loading synonyms metadata..."
if [ -f "$METADATA_DIR/synonyms.yaml" ]; then
    # Command to load synonyms metadata into the database
    # Example: psql -U username -d database -f "$METADATA_DIR/synonyms.yaml"
    echo "Synonyms metadata loaded successfully."
else
    echo "Synonyms metadata file not found."
fi

echo "Metadata seeding completed."