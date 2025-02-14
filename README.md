# Component Documentation

This guide provides documentation for all available components and their configuration options. Each component can be used in your markdown files by adding them to the `components` array in the frontmatter.

## Table of Contents

- [Hero Banner](#hero-banner)
- [Split Markdown](#split-markdown)
- [Rich Text](#rich-text)
- [Image Duo](#image-duo)
- [Single Image](#single-image)
- [Project Gallery](#project-gallery)
- [Post Gallery](#post-gallery)
- [Lead Generation Form](#lead-generation-form)
- [Split Hero](#split-hero)
- [Video Player](#video-player)

## Hero Banner

A full-width banner component with background image/video support, overlay, and CTA button.

```yaml
- name: hero-banner
  data:
    height: 90vh # Optional, defaults to min-h-[70vh]
    background:
      type: image # or video
      src: /path/to/image.jpg
      alt: Background description # for images
      format: video/mp4 # Optional, for videos
    overlay:
      opacity: 60 # 0-100
    eyebrow: Optional eyebrow text
    title: Main Title
    text: |
      Markdown content for the description.
      Supports **bold** and other markdown formatting.
    cta:
      url: /some-page
      text: Button Text
```

## Split Markdown

A two-column layout for markdown content with responsive behavior.

```yaml
- name: split-markdown
  data:
    layout: left # or right - determines which side gets the 66% width
    left: |
      ## Left Column
      Markdown content for the left column.
      - Supports lists
      - And other markdown features
    right: |
      ## Right Column
      Markdown content for the right column.
```

## Rich Text

A simple markdown content block with optional title.

```yaml
- name: rich-text
  data:
    title: Optional Section Title
    text: |
      # Markdown Content
      Supports all markdown features including:
      - Lists
      - **Bold text**
      - ### Headings
```

## Image Duo

Display two images side by side with optional caption.

```yaml
- name: image-duo
  data:
    image1:
      src: /path/to/first-image.jpg
      alt: First image description
    image2:
      src: /path/to/second-image.jpg
      alt: Second image description
    caption: Optional caption text below both images
```

## Single Image

Display a single image with optional caption.

```yaml
- name: single-image
  data:
    image:
      src: /path/to/image.jpg
      alt: Image description
      width: 800 # Optional
      height: 600 # Optional
    caption: Optional image caption
```

## Project Gallery

Display a grid of project cards from the projects collection.

```yaml
- name: project-gallery
  data:
    title: Optional Section Title
```

## Post Gallery

Display a grid of blog post cards from the posts collection.

```yaml
- name: post-gallery
  data:
    title: Optional Section Title
```

## Lead Generation Form

A split-layout form component for lead generation.

```yaml
- name: lead-gen-form
  data:
    layout: left # or right - determines image position
    title: Form Title
    text: |
      Markdown content for form description
    image:
      src: /path/to/image.jpg
      alt: Image description
    form:
      fields:
        - id: name
          type: text # text, email, textarea
          label: Field Label
          placeholder: Placeholder text
          required: true # Optional
      submitText: Submit Button Text
      disclaimer: Optional disclaimer text
```

## Split Hero

A two-column hero section with image and content.

```yaml
- name: split-hero-left # or split-hero-right
  data:
    title: Section Title
    text: |
      Markdown content for description
    image:
      src: /path/to/image.jpg
      alt: Image description
    cta:
      url: /some-page
      text: Button Text
```

## Video Player

Embed a video player with optional poster image and caption.

```yaml
- name: video-player
  data:
    video:
      src: /path/to/video.mp4
      type: video/mp4 # Optional, defaults to video/mp4
      poster: /path/to/poster.jpg # Optional
      width: 800 # Optional
      height: 600 # Optional
    caption: Optional video caption
```

## Usage Example

Here's an example of how to use multiple components in a markdown file:

```yaml
---
layout: base.njk
title: Example Page
components:
  - name: hero-banner
    data:
      height: 90vh
      background:
        type: image
        src: /images/hero.jpg
        alt: Hero Background
      overlay:
        opacity: 60
      title: Welcome to Our Site
      text: |
        This is a sample hero banner with a background image
        and overlay.
      cta:
        url: /contact
        text: Get in Touch

  - name: split-markdown
    data:
      layout: left
      left: |
        ## Left Column
        Content for the left column
      right: |
        ## Right Column
        Content for the right column

  - name: lead-gen-form
    data:
      layout: right
      title: Download Our Guide
      text: |
        Get our free guide to learn more.
      image:
        src: /images/guide-preview.jpg
        alt: Guide Preview
      form:
        fields:
          - id: email
            type: email
            label: Email Address
            required: true
        submitText: Download Now
---
```

## Component Spacing

Components are automatically spaced with consistent vertical margins between them. The hero banner component, when used, automatically removes the top padding from the main content area.

## Responsive Behavior

All components are fully responsive and will adapt to different screen sizes:
- Mobile: Single column layouts
- Tablet: Enhanced grid layouts
- Desktop: Full two-column layouts where applicable

## Styling

Components use Tailwind CSS for styling with a consistent design system including:
- Colors: primary, secondary, background
- Spacing: xs, sm, md, lg, xl
- Typography: Consistent font sizes and line heights
- Animations: Smooth transitions and hover effects