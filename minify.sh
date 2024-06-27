#!/bin/bash

# Ask for the JavaScript file name
read -p "Enter the JavaScript file name: " file_name

# Check if the file has a .js extension
if [[ $file_name != *.js ]]; then
    echo "The file must have a .js extension."
    exit 1
fi

# Check if the file exists
if [ ! -f "$file_name" ]; then
    echo "The file $file_name does not exist."
    exit 1
fi

# Minify the JavaScript file using uglify-js
uglifyjs "$file_name" -o "${file_name%.js}.min.js"

echo "Minified file created at: ${file_name%.js}.min.js"
