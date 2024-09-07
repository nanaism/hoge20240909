type=$1

#!/bin/bash

# Set the paths
JSON_FILE="public/static/markdown/sermon/list.json"
MD_DIR="public/static/markdown/sermon"

# Check if JSON file exists
if [[ ! -f "$JSON_FILE" ]]; then
  echo "Error: $JSON_FILE not found!"
  exit 1
fi

# Get the latest article index by reading the JSON file and extracting the numbers
latest_index=$(jq '.articles | map(tonumber) | max' "$JSON_FILE")

# Add 1 to the latest index
new_index=$((latest_index + 1))

# Create the new markdown file
new_md_file="$MD_DIR/$new_index.md"
touch "$new_md_file"

# Check if the file was successfully created
if [[ -f "$new_md_file" ]]; then
  echo "Created new markdown file: $new_md_file"
else
  echo "Error: Failed to create $new_md_file"
  exit 1
fi

# Add the new article index to the JSON file
jq --argjson new_index "$new_index" '.articles += [$new_index|tostring]' "$JSON_FILE" > tmp.json && mv tmp.json "$JSON_FILE"

echo "Updated $JSON_FILE with the new article index $new_index"

