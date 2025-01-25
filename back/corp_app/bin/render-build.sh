set -o errexit

bundle install
RAILS_ENV=production DISABLE_DATABASE_ENVIRONMENT_CHECK=1 bundle exec rake db:drop
bundle exec rake db:create
bundle exec rake db:seed
bundle exec rake db:migrate