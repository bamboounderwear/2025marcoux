---
layout: base.njk
title: Home
components:
  - name: rich-text
    data:
      title: Welcome to Our Site
      text: |
        This is a sample rich text component that demonstrates the dynamic component system.
        You can add **markdown** formatting and it will be rendered properly.

        - List items work too
        - And other markdown features
        
        ### Subheadings are supported
        
        Everything you need in a rich text block!
  
  - name: image-duo
    data:
      image1:
        src: https://placehold.co/800x600
        alt: Design Process
      image2:
        src: https://placehold.co/800x600
        alt: Development Process
      caption: Our design and development process in action
  
  - name: project-gallery
    data:
      title: Featured Projects
  
  - name: post-gallery
    data:
      title: From Our Blog