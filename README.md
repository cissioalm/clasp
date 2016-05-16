# clasp

Source for the Website for the Computational Linguistics and Speech Processing Lab at RIT

## Installation

Built with the Ruby static-site generator Middleman.

Require a Ruby insallation. Then inside the project directory run.

```
# Install bundle package manager
gem install bundler
# Install project dependencies
bundle install
```

Middleman comes with a few commands to get started

```
# Start a test server, that livereloads when you save
bundle exec middleman server
# Build the static site to www/ directory
bundle exec middleman build
# Deploy this build to production
TARGET=prod USER=ritID bundle exec middleman deploy
```


