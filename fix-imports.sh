#!/bin/bash

# Function to process a directory
process_directory() {
  local dir=$1
  
  # Find all TypeScript and TypeScript React files
  find "$dir" -type f -name "*.ts" -o -name "*.tsx" | while read -r file; do
    # Update component imports
    sed -i 's|@components/\([^/]*\)/\([^"]*\)|@/components/\1/\1/\2|g' "$file"
    sed -i 's|@/components/\([^/]*\)/\([^"]*\)|@/components/\1/\1/\2|g' "$file"
    
    # Update feature imports
    sed -i 's|@/features/\([^/]*\)/component/\([^/]*\)/\([^"]*\)|@/features/\1/component/\2/\2/\3|g' "$file"
  done
}

# Process src directory
process_directory "src" 