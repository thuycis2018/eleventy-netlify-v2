---
layout: article.njk
title: What is headless CMS?
author: JL
category: CMS
description: A headless content management system, or headless CMS, is a
  back-end-only content management system that acts primarily as a content
  repository. A headless CMS makes content accessible via an API for display on
  any device without a built-in front-end or presentation layer.
date: 2022-03-05T08:00:00.000Z
tag:
  - post
  - cms
featuredImage: /assets/cms_headless.png
---
A headless content management system, or headless CMS, is a back-end-only content management system that acts primarily as a content repository. A headless CMS makes content accessible via an API for display on any device without a built-in front-end or presentation layer.

Whereas a traditional CMS typically combines the content and presentation layers of a website, a headless CMS comprises just the content component and focuses entirely on the administrative interface for content creators, the facilitation of content workflows and collaboration, and the organization of content into taxonomies. As such, a headless CMS must be combined with a separate presentation layer to handle design, site structure and templates. That combination generally relies on stateless or loosely coupled APIs.
One advantage of this decoupled approach is that content can be sent via APIs to multiple display types, like mobile and Internet of Things (IoT), devices, alongside a website. A disadvantage, however, is the requirement to maintain two separate systems for a single site, which can require more resources. [Wikipedia](https://en.wikipedia.org/wiki/Headless_content_management_system)

This site is currently using Netlify CMS. Articles can be created and managed in Netlify CMS. When changes occurred, Netlify will push the changes to my GitHub and then that will start the deployment of Eleventy and generate static content pages. These pages will be available instantly on this site.