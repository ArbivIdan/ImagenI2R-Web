export const researchData = {
  title: "A Diffusion Model for Regular Time Series Generation from Irregular Data with Completion and Masking",
  authors: [
    { name: "Gal Fadlon", affiliation: "Ben Gurion University of the Negev", equalContribution: true },
    { name: "Idan Arbiv", affiliation: "Ben Gurion University of the Negev", equalContribution: true },
    { name: "Nimrod Berman", affiliation: "Ben Gurion University of the Negev", equalContribution: false },
    { name: "Omri Azencot", affiliation: "Ben Gurion University of the Negev", equalContribution: false }
  ],
  affiliations: {
    "Ben Gurion University of the Negev": "🐪"
  },
  links: {
    github: "https://github.com/azencot-group/ImagenI2R",
    arxiv: "#",
    neurips: "https://neurips.cc/virtual/2025/poster/118491"
  },
  socialItems: [
    {
      link: "https://github.com/azencot-group/ImagenI2R",
      icon: "github"
    },
    {
      link: "https://www.linkedin.com/company/the-sequential-learning-group/",
      icon: "linkedin"
    }
  ],
  abstract: "Generating realistic time series data is critical for applications in healthcare, finance, and science. However, irregular sampling and missing values present significant challenges. While prior methods address these irregularities, they often yield suboptimal results and incur high computational costs. Recent advances in regular time series generation, such as the diffusion-based ImagenTime model, demonstrate strong, fast, and scalable generative capabilities by transforming time series into image representations, making them a promising solution. However, extending ImagenTime to irregular sequences using simple masking introduces 'unnatural' neighborhoods, where missing values replaced by zeros disrupt the learning process. To overcome this, we propose a novel two-step framework: first, a Time Series Transformer completes irregular sequences, creating natural neighborhoods; second, a vision-based diffusion model with masking minimizes dependence on the completed values. This approach leverages the strengths of both completion and masking, enabling robust and efficient generation of realistic time series. Our method achieves state-of-the-art performance, achieving a relative improvement in discriminative score by 70% and in computational cost by 85%.",
  keyContributions: [
    "We introduce a novel generative model for irregularly-sampled time series, leveraging vision-based diffusion approaches to efficiently and effectively handle sequences ranging from short to long lengths.",
    "In contrast to existing methods that assume completed information is drawn from the data distribution, we treat it as a weak conditioning signal and directly optimize on the observed signal using a masking strategy.",
    "Our approach achieves state-of-the-art performance across multiple generative tasks, delivering an average improvement of 70% in discriminative benchmarks while reducing computational requirements by 85% relative to competing methods."
  ],
  sections: [
    {
      id: "introduction",
      title: "The Challenge of Irregular Time Series",
      content: "Time series data is essential in fields such as healthcare, finance, and science, supporting critical tasks like forecasting trends, detecting anomalies, and analyzing patterns. Beyond direct analysis, generating synthetic time series has become increasingly valuable for creating realistic proxies of private data, testing systems under new scenarios, exploring 'what-if' questions, and balancing datasets for training machine learning models. The ability to generate realistic sequences enables deeper insights and robust applications across diverse domains. In practice, however, time series data is often irregular, with missing values and unevenly spaced measurements. These irregularities arise from limitations in data collection processes, such as sensor failures, inconsistent sampling, or interruptions in monitoring systems."
    },
    {
      id: "existing-limitations",
      title: "Limitations of Existing Approaches",
      content: "The synthesis of regular time series from irregular ones is a fundamental challenge, yet existing approaches remain scarce, with notable examples being GT-GAN and KoVAE. Unfortunately, these methods suffer from several limitations. First, they rely on generative adversarial networks (GANs) and variational autoencoders (VAEs), which have recently been surpassed in performance by diffusion-based tools. Second, both GT-GAN and KoVAE utilize a computationally-demanding preprocessing step based on neural controlled differential equations (NCDEs), rendering these methods impractical for long time series. For instance, KoVAE requires approximately 6.5 times more training time in comparison to our approach. Third, these methods inherently assume that the data, completed by NCDE, accurately reflects the true underlying distribution, which can introduce catastrophic errors when this assumption fails."
    },
    {
      id: "our-approach",
      title: "Our Two-Step Framework",
      content: "To address these shortcomings, we base our approach on a recent diffusion model for time series, ImagenTime. This method maps time series data to images, enabling the use of powerful vision-based diffusion neural architectures. Leveraging a vision-based diffusion generator offers a significant advantage: regular time series can be generated from irregular ones using a straightforward masking mechanism. However, while this straightforward masking approach is simple and achieves strong results, we identify a significant limitation. Missing values in the time series are mapped to zeros in the image, resulting in 'unnatural' neighborhoods that mix valid and invalid information. To address this issue, we propose a two-step generation process. In the first step, we complete the irregular series using our adaptation of an efficient Time Series Transformer (TST) approach, significantly reducing computational overhead and enabling the generation of long time series. In the second step, we apply the straightforward masking approach described earlier."
    },
    {
      id: "unnatural-neighborhoods",
      title: "The Problem of Unnatural Image Neighborhoods",
      content: "Unfortunately, the straightforward approach has a fundamental limitation: although non-active pixels are ignored during loss computation, they are still processed by the network. In practice, missing values are replaced with zeros, resulting in 'unnatural' pixel neighborhoods. Specifically, while zeros may occasionally occur in non-zero segments of a time series, their repeated presence is highly unlikely, leading to inconsistencies. In other words, masking is not applied at the architecture level, potentially hindering the effective learning of neural components. This can pose challenges for diffusion backbones, such as U-Nets with convolutional blocks, where the convolution kernels are not inherently masked and may inadvertently propagate errors from these artificial neighborhoods."
    },
    {
      id: "completion-masking",
      title: "Combining Completion and Masking",
      content: "To create more natural pixel neighborhoods while remaining agnostic to the underlying architecture, we draw inspiration from the two-step process utilized in GT-GAN and KoVAE. Our approach adopts a two-step training scheme. First, we complete the missing values in the irregularly-sampled time series using TST, producing a regularly-sampled sequence. Next, we transform the completed time series into an image and apply denoising as in ImagenTime, with a key distinction: we apply the mask to the completed pixels during the loss computation. This novel combination of completion and masking addresses the two primary challenges of processing irregular sequences. On one hand, it creates natural neighborhoods, enabling convolutional kernels to learn effectively from values that closely align with the true data distribution. On the other hand, it ensures that the completed values are not fully relied upon by excluding them from the loss computation via the mask, striking a balance between utilizing and mitigating incomplete information."
    },
    {
      id: "performance",
      title: "State-of-the-Art Performance",
      content: "We conduct a comprehensive evaluation of our approach on standard irregular time series benchmarks, benchmarking it against state-of-the-art methods. Our model consistently demonstrates superior generative performance, effectively bridging the gap between regular and irregular settings. Furthermore, we extend the evaluation to medium-, long- and ultra-long-length sequence generation, assessing performance across 12 datasets and 12 tasks. The results highlight the robustness and efficiency of our method, achieving consistent improvements over existing approaches. Our approach achieves state-of-the-art performance across multiple generative tasks, delivering an average improvement of 70% in discriminative benchmarks while reducing computational requirements by 85% relative to competing methods."
    },
    {
      id: "efficiency",
      title: "Computational Efficiency",
      content: "Our approach demonstrates significant computational advantages over existing methods. Unlike GT-GAN and KoVAE which rely on computationally-demanding NCDE preprocessing, our TST-based completion is much more efficient. KoVAE requires approximately 6.5 times more training time compared to our approach, as demonstrated in our training time analysis. The two-step framework enables effective modeling of long time series while making minimal assumptions about pre-completed data, resulting in significantly improved generation performance with reduced computational overhead. This efficiency is particularly important for practical applications where computational resources are limited."
    }
  ],
  citation: {
    bibtex: `@inproceedings{fadlon2025diffusionmodelregulartimeseries,
      title={A Diffusion Model for Regular Time Series Generation from Irregular Data with Completion and Masking}, 
      author={Gal Fadlon and Idan Arbiv and Nimrod Berman and Omri Azencot},
      booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
      year={2025},
      url={https://neurips.cc/virtual/2025/poster/118491}
}`
  }
};
