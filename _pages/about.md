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
<div style="display: flex; flex-wrap: wrap; gap: 30px; align-items: flex-start; margin: 30px 0;">
  
  <!-- Left column: Network Graph -->
  <div style="flex: 1.2; min-width: 450px;">
    <div id="network-container" style="width: 100%; height: 650px; border-radius: 10px; background-color: rgba(255, 255, 255, 0.7); padding: 10px; box-sizing: border-box;"></div>
    <div style="font-size: 0.85em; color: #666; text-align: center; margin-top: 10px; font-style: italic;"></div>
  </div>
  
  <!-- Right column: Bio -->
  <div style="flex: 1; min-width: 300px; max-width: 550px;">
    <p>I am a Postdoctoral Researcher at the Center for Drug Discovery, Northeastern University, where I develop AI systems that bridge molecular mechanisms to whole-body physiology. My work focuses on creating multi-scale learning algorithms that predict drug interactions and optimize treatments for individual patients. I am also exploring uncertainty-aware reinforcement learning to make generative AI models more reliable for scientific and therapeutic decision-making.</p>
    
    <p>I am also a Co-Founder and AI/ML Scientist at Dark Matter Therapeutics, where we aim to translate the concept of virtual humans into practice—using AI-driven modeling to accelerate precision drug discovery.</p>
    
    <p>I completed my PhD in Computer Science at the Graduate Center, The City University of New York, advised by Dr. Lei Xie (CUNY, Weill Cornell Medicine, and Northeastern). My doctoral research focused on large language models, multi-modal learning, meta-learning, and self-supervised learning for computational biology and precision medicine, building AI frameworks that decode complex biological systems and simulate drug responses before clinical trials.</p>
    
    <p>Previously, I worked at Genentech, developing machine learning models that integrate genomic and clinical data for patient survival prediction and personalized therapy design.</p>
    
    <p>My path to AI and biology has been interdisciplinary: starting in electronic engineering, evolving through entrepreneurship in fashion retail, advancing through data science, and culminating in machine learning for biology. I never stop challenging myself, and that's the fun part.</p>
    
    <p style="margin-bottom: 8px;"><strong>I'm inspired by questions like:</strong></p>
    <ul style="margin-top: 0; padding-left: 25px; line-height: 1.6;">
      <li>Can we simulate an individual's biology before testing a drug?</li>
      <li>What if knowledge could transfer seamlessly from one disease to another?</li>
      <li>How close are we to a universal foundation model of human health?</li>
    </ul>
    
    <p style="margin-top: 15px;">Let's find out 🤗.</p>
  </div>
  
</div>

<!-- Load scripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>
<script src="/assets/js/network.js"></script>



# 📝 Publications 

## Journal Articles

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">2025</div><img src='images/PVH.png' alt="Programmable Virtual Human" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AI-powered programmable virtual humans toward human physiologically-based drug discovery](https://www.sciencedirect.com/science/article/pii/S1359644625002107)

**Wu, Y**, Xie, L.

*Drug Discovery Today, Volume 30, Issue 11*

- Programmable virtual humans simulate the efficacy and safety of a novel compound in a physiological condition
- They enable in silico testing of patient responses to a new chemical entity beyond current experimental pipelines
- They bridge early drug discovery and clinical development to reduce drug failure rates
- They transform target- and phenotype-based discovery into a physiology-driven paradigm
- AI, mechanistic models, and perturbation omics enable programmable virtual humans
</div>
</div>


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

- *2020 - 2025*, Ph.D. in Computer Science, City University of New York, The Graduate Center, New York, NY, USA
  - Advisor: Dr. Lei Xie (City University of New York & Weill Cornell Medicine)
  - Research area: Self-supervised learning (e.g., large language model), transfer learning, meta-learning, multi-modal Learning, computational biology, multi-omics data integration, drug discovery, and precision medicine

- *2020*, Master of Science in Computer Information Systems (Data Science track), City University of New York, Baruch College, New York, NY, USA

- *2014*, Bachelor of Engineering in Communication Engineering, University of Electronic Science and Technology of China, Chengdu, China


# 💬 Presentations

## Invited Talks
- *Fall 2025*, AI-Driven Drug Discovery and Precision Medicine. Rutgers University
- *Fall 2024*, AI-driven multi-omics integration for multi-scale predictive modeling of causal genotype-environment-phenotype relationships. Vanderbilt University Medical Center
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



