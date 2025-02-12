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
        src: "https://placehold.co/600x400/222222/F2F2F2"
        alt: "First sample image"
      image2:
        src: "https://placehold.co/600x400/222222/F2F2F2"
        alt: "Second sample image"
      caption: "Sample image duo component with a caption"
  
  - name: rich-text
    data:
      title: Another Rich Text Section
      text: |
        This demonstrates that we can use the same component multiple times
        with different content each time.
---