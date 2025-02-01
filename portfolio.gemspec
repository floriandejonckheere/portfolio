# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "portfolio"
  spec.version       = "5.0.1"
  spec.authors       = ["Florian Dejonckheere"]
  spec.email         = ["florian@floriandejonckheere.be"]

  spec.summary       = "Portfolio"
  spec.description   = "Portfolio website"
  spec.homepage      = "https://florian.dejonckhee.re"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 3.4")

  spec.metadata["source_code_uri"] = "https://github.com/floriandejonckheere/portfolio"

  spec.metadata = {
    "rubygems_mfa_required" => "true",
  }
end
