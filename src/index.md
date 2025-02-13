---
layout: base.njk
title: Home
components:
  - name: hero-banner
    data:
      height: 90vh
      background:
        type: image
        src: https://placehold.co/1920x1080
        alt: Creative Studio Background
      overlay:
        opacity: 60
      eyebrow: Welcome to
      title: Our Creative Studio
      text: |
        We craft digital experiences that inspire and innovate. Our team of designers and developers work together to create beautiful, functional solutions.
      cta:
        url: /projects
        text: View Our Work
  
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
  
  - name: rich-text
    data:
      text: |
        ## Latest Insights
        
        Stay up to date with our latest thoughts on design, development, and technology.
  
  - name: post-gallery
    data:
      title: From Our Blog