---
title: Devices for Ubiquitous Soil and Temperature measurements
shortTitle: DUST
summary: Until now, little is known in Flanders about the soil quality of urban tree mirrors. In the professional field, people often talk about undersized growth spaces and these are intuitively empirically visible, but there are no substantiated objective criteria to validate this statement. There is no benchmark against which we can test urban soils. This is necessary to convince the policy to invest more in quality of habitat, especially with the current climate problem, in which the vulnerability of urban forests due to drought, heat and flooding is clearly visible.
coverImage: /images/uploads/dust.jpg
type: PWO
tags: sensoring
---




      - { label: 'Title', name: 'title', widget: 'string', required: true }
      - { label: 'Short Title', name: 'shortTitle', widget: 'string', required: false }
      - { label: 'Summary', name: 'summary', widget: 'string', required: true }
      - { label: 'Cover Image', name: 'coverImage', widget: 'image', required: true, allow_multiple: false }
      - { label: 'Type', name: 'type', widget: 'select', required: true, options: ["Student", "PWO", "Tetra"] }
      - { label: 'Tags', name: 'tags', widget: 'list', required: true, min: 1 }