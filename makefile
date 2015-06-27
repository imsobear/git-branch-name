TIMEOUT = 60000
TESTS = test/*.test.js

test:
	NODE_ENV=test ./node_modules/.bin/mocha --timeout $(TIMEOUT) $(TESTS)

test-cov:
	NODE_ENV=test ./node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		--timeout $(TIMEOUT) \
		$(TESTS)

.PHONY: test
