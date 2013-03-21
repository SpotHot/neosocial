source :rubygems

# Stack
gem 'foreman'           # Foreman: a process manager for local development.
                        # Manage Procfile-based applications
                        # Using foreman you can declare the various processes
                        # that are needed to run your application using a
                        # Procfile.
                        #
                        # Foreman will start all of the processes associated
                        # with your app and display stdout and stderr of each
                        # process. Processes are color-coded by type to make
                        # them easy to read. $PORT will be automatically
                        # assigned by foreman and made available to each 
                        # underlying process.
                        # Procfile is an extremely simple file format which
                        # allows you to declare the process types your app
                        # uses. Its format is one process type per line.
                        
gem 'thin'              # A very fast & simple Ruby web server
                        # Thin is a Ruby web server that glues together
                        # 3 of the best Ruby libraries in web history:
                        # the Mongrel parser, the root of Mongrel speed and
                        # security
                        # Event Machine, a network I/O library with extremely
                        # high scalability, performance and stability
                        # Rack, a minimal interface between webservers and
                        # Ruby frameworks
                        # Which makes it, with all humility, the most secure,
                        # stable, fast and extensible Ruby web server bundled
                        # in an easy to use gem for your own pleasure.

# Sinatra
gem 'sinatra'
#gem 'sinatra-contrib'

# Authentication
gem 'omniauth'          # Ruby authentication framework
gem 'omniauth-facebook' # Facebook OAuth2 "strategy" for OmniAuth 1.0

# Databases
gem 'neography'
gem 'redis'             # Needed by sidekiq

# External API
gem 'koala'             # A lightweight, flexible library for Facebook
                        # with support for OAuth authentication, the Graph
                        # and REST APIs, realtime updates, and test users

# Jobs
gem 'sidekiq'           # Moves long-running process into background process.
                        # Handles multiple concurrent jobs using threads, instead
                        # of processes, saving memory.
                        # Simple, efficient message processing for Ruby.
                        # ... is much more memory efficient than Resque
                        # Uses redis to manage job queue.
                        # Assumes redis is at localhost:6379
gem 'slim'              
gem 'sprockets'         

# Others
gem 'oj'
gem 'haml'

group :development, :test do
  gem 'pry'
  gem 'rspec'
  gem 'rack-test'
  gem 'fabrication'

  # Guard
  gem 'guard'
  gem 'guard-rspec'

  # Heroku
  gem 'heroku'
end