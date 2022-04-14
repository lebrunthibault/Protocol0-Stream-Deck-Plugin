#!make

.PHONY: log dev lint icons build test check

log:
	cls && tail -f C:\Users\thiba\AppData\Roaming\Elgato\StreamDeck\logs\StreamDeck0.log

dev:
	cls && yarn watch

lint:
	cls && npm run lint

lint-fix:
	cls && npm run lint-fix

icons:
	cls && powershell ./scripts/make_icons.ps1 $(filter-out $@, $(MAKECMDGOALS))

check:
	cls
	make lint
	make test

build:
	cls && powershell ./scripts/build.ps1

test:
	cls && yarn test