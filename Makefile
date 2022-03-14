#!make

.PHONY: build

build:
	rm -f Release/com.thibault.p0.streamDeckPlugin
	DistributionTool.exe -b -i Sources/com.thibault.p0.sdPlugin -o Release
	start Release/com.thibault.p0.streamDeckPlugin