#!make

.PHONY: log dev lint icons build test

log:
	cls && tail -f C:\Users\thiba\AppData\Roaming\Elgato\StreamDeck\logs\StreamDeck0.log

dev:
	cls && yarn watch

lint:
	cls && npm run lint

icons:
	cls && powershell ./scripts/make_icons.ps1 $(filter-out $@, $(MAKECMDGOALS))

build:
	cls && powershell ./scripts/build.ps1

test:
	cls && yarn test