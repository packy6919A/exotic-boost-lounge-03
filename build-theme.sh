#!/bin/bash

# Build React app
npm run build

# Create theme directory
mkdir -p wordpress-theme
cp -r dist wordpress-theme/
cp style.css wordpress-theme/
cp functions.php wordpress-theme/
cp index.php wordpress-theme/
cp header.php wordpress-theme/
cp footer.php wordpress-theme/

# Create zip file
zip -r gtperformance-theme.zip wordpress-theme/

# Cleanup
rm -rf wordpress-theme