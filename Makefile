rev := $(shell git rev-parse --short HEAD)

build:
	bundle exec jekyll build
	bash ./build-font.sh

install:
	bundle install
	npm install

serve:
	bundle exec jekyll serve
