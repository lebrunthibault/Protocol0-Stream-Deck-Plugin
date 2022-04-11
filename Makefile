#!make

.PHONY: log dev test build echo

log:
	tail -f C:\Users\thiba\AppData\Roaming\Elgato\StreamDeck\logs\StreamDeck0.log

dev:
	yarn watch

lint:
	npm run lint

icons:
	cls && powershell ./scripts/make_icons.ps1 $(filter-out $@, $(MAKECMDGOALS))

build:
	cls && powershell ./scripts/build.ps1

test:
	cls && yarn test