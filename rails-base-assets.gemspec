$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails-base-assets/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails-base-assets"
  s.version     = RailsBaseAssets::VERSION
  s.authors     = ["Giorgenes Gelatti"]
  s.email       = ["giorgenes@gmail.com"]
  s.homepage    = "http://github.com/giorgenes/rails-base-assets"
  s.summary     = "Basic assets for rails."
  s.description = "Basic assets for rails."

  s.files = Dir["{app,config,db,lib,vendor}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.1.1"

  s.add_development_dependency "sqlite3"
end
