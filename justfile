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

# Create a new post
new-post:
    @hugo new  content content/posts/$(date +"%Y-%m-%d")_$(gum input --placeholder 'Post Name').md
