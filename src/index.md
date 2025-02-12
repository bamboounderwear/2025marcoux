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
  
  - name: single-image
    data:
      image:
        src: "https://placehold.co/1200x800"
        alt: "A beautiful landscape"
      caption: "A stunning view of nature"

  - name: video-player
    data:
      video:
        src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
        poster: "https://placehold.co/1200x800"
        type: "video/mp4"
      caption: "Sample video player with controls"
  
  - name: image-duo
    data:
      image1:
        src: "https://placehold.co/800x1000"
        alt: "First sample image"
      image2:
        src: "https://placehold.co/800x1000"
        alt: "Second sample image"
      caption: "Sample image duo component with a caption"
  
  - name: rich-text
    data:
      title: Another Rich Text Section
      text: |
        This demonstrates that we can use the same component multiple times
        with different content each time.
---