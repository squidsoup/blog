#!/usr/bin/env bash

aws s3 rm s3://nocturne-blog --recursive
aws s3 cp --recursive ~/src/nocturne-blog/blog/.vuepress/dist/ s3://nocturne-blog
