---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---



{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<!-- Flex container: Graph left, bio right -->
<div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">

  <!-- Left column: Network Graph -->
  <div id="network-container" style="flex: 1; min-width: 400px; height: 600px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.7);"></div>

  <!-- Right column: Bio -->
  <div style="flex: 1; min-width: 320px; max-width: 600px;">

  <p>I’m a PhD candidate in Computer Science at CUNY Graduate Center, where I build AI systems that decode biology and reimagine drug discovery—think virtual humans simulating how drugs work before trials begin. I’m advised by Dr. Lei Xie (The City University of New York & Weill Cornell), and my work spans large language models, multi-modal learning, computational biology, and precision medicine.</p>

  <p>My path here wasn’t exactly linear: from circuit boards (undergrad in electronic engineering), to fashion (ran my own clothing store for 3 years), to data science (MS), and now to machine learning for biology. I never stop challenging myself—and that’s the fun part.</p>

  <p>In summer 2023, I spent 6 months at Genentech, where I worked across Clinical Pharmacology and Research Biology to develop an AI model for survival prediction—integrating genomics and clinical data to guide personalized therapy.</p>

  <p>I’m excited by big questions like:<br>
  • Can we simulate an individual’s biology before testing a drug?<br>
  • What if we could transfer knowledge from one disease to another?<br>
  • How close are we to a universal foundation model of human health?</p>

  <p>Let’s find out 🤗.</p>

  </div>
</div>

<!-- Load scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script src="/assets/js/network.js"></script>



# 📝 Publications 

## Journal Articles

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2025</div><img src='images/omics.jpeg' alt="Multi-omics integration" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AI-driven multi-omics integration for multi-scale predictive modeling of genotype-environment-phenotype relationships](https://www.sciencedirect.com/science/article/pii/S2001037024004513)

**Wu, Y**, Xie, L.

*Computational and Structural Biotechnology Journal, 27:265-277*

- Developed frameworks for integrating multi-omics data to predict complex biological phenotypes
- Applied advanced AI techniques to model genotype-environment-phenotype relationships
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024</div><img src='images/mmaple.jpeg' alt="Meta learning" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Semi-supervised meta-learning elucidates understudied molecular interactions](https://www.nature.com/articles/s42003-024-06797-z)

**Wu, Y**, Xie, L., Liu, Y., Xie, L.

*Communications Biology, 7(1): 1104*

- Developed semi-supervised meta-learning approaches to address label insufficiency in biomedical data
- Discovered novel interspecies metabolite-protein interactions
- Advanced understanding of microbiome-host interaction mechanisms
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2023</div><img src='images/transpro.jpeg' alt="Hierarchical integration" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Hierarchical multi-omics data integration and modeling predict cell-specific chemical proteomics and drug responses](https://www.cell.com/cell-reports-methods/fulltext/S2667-2375(23)00071-1)

**Wu, Y**, Liu, Q., Xie, L.

*Cell Reports Methods, 3(4)*

- Integrated hierarchical multi-omics data to reconstruct proteome-scale drug-target interactions
- Built models to predict drug phenotypic responses for drug repurposing and discovery
- Focused application on incurable diseases through systems-level modeling
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2022</div><img src='images/multidcp.jpeg' alt="Deep learning" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep learning prediction of chemical-induced dose-dependent and context-specific multiplex phenotype responses and its application to personalized Alzheimer's disease drug repurposing](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010367)

**Wu, Y**, Liu, Q., Qiu, Y., Xie, L.

*PLoS Computational Biology, 18(8): e1010367*

- Developed deep learning models for predicting complex drug responses
- Applied models to personalized Alzheimer's disease drug repurposing
- Accounted for dose-dependent and context-specific multiplex phenotypes
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2022</div><img src='images/codeae.jpeg' alt="Autoencoder" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A context-aware deconfounding autoencoder for robust prediction of personalized clinical drug response from cell-line compound screening](https://www.nature.com/articles/s42256-022-00541-0)

He, D., Liu, Q., **Wu, Y**, Xie, L.

*Nature Machine Intelligence, 4(10): 879-892*

- Developed a novel autoencoder architecture to handle confounding factors in drug response prediction
- Created a context-aware approach to improve personalized medicine applications
- Enhanced prediction robustness when transferring from cell-line to clinical data
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2021</div><img src='images/covid.jpeg' alt="COVID-19" width="100%"></div></div> 
<div class='paper-box-text' markdown="1"> 

[COVID-19 multi-targeted drug repurposing using few-shot learning](https://www.frontiersin.org/journals/bioinformatics/articles/10.3389/fbinf.2021.693177/full)

Liu, Y., **Wu, Y**, Shen, X., Xie, L.

*Frontiers in Bioinformatics, 1: 693177*

- Applied few-shot learning techniques to the challenge of COVID-19 drug repurposing
- Developed a multi-targeted approach to identify potential therapeutic compounds
- Leveraged limited data to make predictions about drug efficacy against SARS-CoV-2
</div>
</div>

## Conference Papers & Workshop Papers

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2024</div><img src='images/gstab.jpeg' alt="Guided STab" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multitask-Guided Self-Supervised Tabular Learning for Patient-Specific Survival Prediction](https://proceedings.mlr.press/v240/wu24a.html)

**Wu, Y**, Bazgir, O., Lee, Y., Biancalani, T., Lu, J., Hajiramezanali, E.

*Neural Information Processing Systems (NeurIPS 2023): New Frontiers of AI for Drug Discovery and Development (AI4D), Table Representation Learning (TRL). Proceedings of the 18th Machine Learning in Computational Biology meeting, PMLR 240:10-22*

- Developed Guided-STab, a framework using RNA-seq data pretraining across various cancer types
- Introduced novel tabular data augmentation techniques for improved representation learning
- Leveraged sparse clinical features as auxiliary multitask objectives to enhance model performance
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2020</div><img src='images/molgnn.jpeg' alt="MoLGNN" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MoLGNN: Self-supervised motif learning graph neural network for drug discovery](https://link)

Shen, X., Liu, Y., **Wu, Y**, Xie, L.

*Neural Information Processing Systems (NeurIPS 2020): Machine Learning for Molecules (ml4molecules)*

- Created a novel graph neural network architecture that incorporates molecular motif information
- Developed self-supervised learning strategies for molecular representation
- Applied the approach to drug discovery problems with limited labeled data
</div>
</div>


# 📖 Educations

- *2020 - 2025 (Expected)*, Ph.D. in Computer Science, City University of New York, The Graduate Center, New York, NY, USA
  - Advisor: Dr. Lei Xie (City University of New York & Weill Cornell Medicine)
  - Research area: Self-supervised learning (e.g., large language model), transfer learning, meta-learning, multi-modal Learning, computational biology, multi-omics data integration, drug discovery, and precision medicine

- *2020*, Master of Science in Computer Information Systems (Data Science track), City University of New York, Baruch College, New York, NY, USA

- *2014*, Bachelor of Engineering in Communication Engineering, University of Electronic Science and Technology of China, Chengdu, China


# 💬 Presentations

## Invited Talks
- *Fall 2024*, AI-driven multi-omics integration for multi-scale predictive modeling of causal genotype-environment-phenotype relationships. Vanderbilt University Medical Center, Virtual
- *Spring 2024*, Harnessing AI for Omics-Driven Drug Discovery. Appel Forum WIPS, Weill Cornell Medicine, NYC
- *Summer 2023*, MultiDCP: A chemical perturbation deep learning modeling for dose-dependent and context-specific multiplex phenotype responses. Genentech, South San Francisco, CA

## Conference & Symposium Oral Presentations
- *Spring 2024*, Harnessing AI for Systems Medicine of Incurable Diseases. Keystone: AI in Biomedicine, Virtual
- *Summer 2022*, A Context-aware De-confounding Autoencoder for Robust Prediction of Personalized Clinical Drug Response From Cell Line Compound Screening. Intelligent Systems for Molecular Biology (ISMB), Madison, WI
- *Summer 2022*, Deep learning prediction of chemical-induced dose-dependent and context-specific multiplex phenotype responses and its application to personalized Alzheimer's disease drug repurposing. International Conference on Intelligent Biology and Medicine (ICIBM), Philadelphia, Penn

## Conference & Symposium Poster Presentations
- *Fall 2024*, MMAPLE: Meta Model Agnostic Pseudo Label Learning for Understudied Out-of-distribution Molecular Interactions. International Conference on Intelligent Biology and Medicine (ICIBM), BRC Rice University in Houston, TX
- *Spring 2024*, AI-powered Multi-omics data integration for Systems Medicine of Incurable Diseases. DahShu Data Science Symposium, Michigan State University (MSU), MI
- *Spring 2024*, Spatial and single-cell multi-omics data integration and predictive modeling. Appel Poster Symposium, Weill Cornell Medicine, NYC
- *Fall 2023*, Multitask-Guided Self-Supervised Tabular Learning for Patient-Specific Survival Prediction. Neural Information Processing Systems (NeurIPS): New Frontiers of AI for Drug Discovery and Development (AI4D), Table Representation Learning (TRL), New Orleans, LA

# 🏆 Honors and Awards

- *2023*, DESRES Doctoral & Postdoctoral Fellowship, D.E. Shaw Research
- *2023, 2022*, Winner, Computer Science Department Poster Competition, Graduate Center, CUNY
- *2014*, Excellent Student Award, University of Electronic Science and Technology of China

# 📋 Outreach and Professional Development

**Peer Review:** Nucleic Acids Research, Scientific Reports, Nature Communications, PLoS Computational Biology, Drug Discovery Today, BMC Bioinformatics, Frontiers in Immunology, ICLR-MLGenX, NeurIPS-AI4D

**Professional Memberships:** International Society for Computational Biology (ISCB)

# 🎓 Teaching Experience

- *Fall 2024*, Big Data Technologies, Hunter College, Teaching Assistant
- *Fall 2023*, Big Data Technologies, Hunter College, Instructor

# 👨‍🏫 Mentoring

- *Summer 2024*, Computer Science Undergraduate, Lehigh University, NSF Research Experiences for Undergraduates (REU)
- *Summer 2022*, Computer Science Undergraduate, Cornell University, NSF Research Experiences for Undergraduates (REU)



