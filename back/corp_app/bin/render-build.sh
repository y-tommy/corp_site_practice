set -o errexit

bundle install
bundle exec rake db:seed_fu
bundle exec rake db:migrate