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
  
  - name: split-markdown
    data:
      layout: left
      left: |
        ## Our Approach

        We believe in creating digital experiences that not only look beautiful but also serve a purpose. Our approach combines:

        - User-centered design principles
        - Modern development practices
        - Agile methodologies
        - Continuous iteration
        
        Every project is an opportunity to push boundaries and create something extraordinary.
      right: |
        ## Our Expertise

        With years of experience in digital creation, we specialize in:

        - Web Development
        - UI/UX Design
        - Brand Identity
        - Digital Strategy
        
        We're passionate about helping businesses succeed in the digital world.
  
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
        src: /assets/img1.jpg
        alt: Design Process
      image2:
        src: /assets/img2.jpg
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