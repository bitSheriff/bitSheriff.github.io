set shell := ["bash", "-uc"]
 
# Per Default start the local instance
default: serve

# Start the server, build drafts too
serve:
    hugo server --buildDrafts

# Deploy the blog to Git
deploy:
    # Adding all files to git
    @git add -A
     
    # Committing
    @git commit -m "$(gum input --placeholder 'Commit Message')"
     
    # Pushing to the Deployment Server
    @git push

# Create a new simple post
simple-post:
    #!/bin/bash
    post_path=content/posts/$(date +"%Y-%m-%d")_$(gum input --placeholder 'Post Name')
    # replace whitespaces with dash
    post_path==$(echo "$post_path" | tr ' ' '-')
    # create the folder
    mkdir -p "$post_path"
    # create the blog entry from a hugo remplate
    hugo new  "$post_path/index.md"
