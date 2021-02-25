build:
	rsync -a --exclude-from='.ignore' . build/

stage:
	# Assuming directory structure:
	# .
	# ├── gh-pages # cloned `gh-pages` branch
	# │   ├── index.html
	# │   ├── projects/
	# │   ...
	# └── main # cloned `main` branch
	#     ├── README.md
	#  	  ├── www
	# 	  │   ├── Makefile # here
	#	  │   ...
	# 	  ...
	cp -r build/* ../../gh-pages/

clean:
	rm -rf build/
