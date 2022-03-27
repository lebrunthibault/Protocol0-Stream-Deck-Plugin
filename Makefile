#!make

.PHONY: log dev test build echo

log:
	tail -f C:\Users\thiba\AppData\Roaming\Elgato\StreamDeck\logs\StreamDeck0.log

dev:
	npm run watch

icons:
	powershell ./scripts/make_icons.ps1 $(filter-out $@, $(MAKECMDGOALS))

build:
	powershell ./scripts/build.ps1

test:
	npm run test