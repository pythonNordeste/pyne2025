SITE_LIBS_PATH = libs
SITE_CSS_PATH = $(LIB_PATH)/css
SITE_JS_PATH = $(LIB_PATH)/js

NODE_LIBS_PATH = node_modules
BOOTSTRAP_PATH = $(NODE_LIBS_PATH)/bootstrap/dist/
BOOTSTRAP_ICONS_PATH = $(NODE_LIBS_PATH)/bootstrap-icons/font/


install:
	@npm install

build: install
	@mkdir -p $(SITE_LIBS_PATH)
	@mkdir -p $(SITE_CSS_PATH)
	@mkdir -p $(SITE_JS_PATH)
	@cp -r $(BOOTSTRAP_PATH)/css/*.min.css $(CSS_PATH)
	@cp -r $(BOOTSTRAP_PATH)/js/*.min.js $(JS_PATH)
	@cp -r $(BOOTSTRAP_ICONS_PATH)/*.min.css $(CSS_PATH)
	@cp -r $(BOOTSTRAP_ICONS_PATH)/fonts $(CSS_PATH)

run: build
	@npm run dev

clean:
	@rm -rf $(SITE_LIBS_PATH)
	@rm -rf $(NODE_LIBS_PATH)
