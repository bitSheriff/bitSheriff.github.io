
# List all recipes
default:
    just --choose

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
