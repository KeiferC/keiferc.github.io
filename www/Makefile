build:
	rsync -a --exclude-from='.ignore' . build/

stage:
	mv build ..
	git checkout gh-pages
	cp -r ../build/* .

clean:
	rm -rf build/
