export const publications = [
    {
      id: 1,
      title: "Sequential Disentanglement by Extracting Static Information From A Single Sequence Element",
      description:
        'One of the fundamental representation learning tasks is unsupervised sequential disentanglement, where latent codes of inputs are decomposed to a single static factor and a sequence of dynamic factors. To extract this latent information, existing methods condition the static and dynamic codes on the entire input sequence. Unfortunately, these models often suffer from information leakage, i.e., the dynamic vectors encode both static and dynamic information, or vice versa, leading to a non-disentangled representation. Attempts to alleviate this problem via reducing the dynamic dimension and auxiliary loss terms gain only partial success. Instead, we propose a novel and simple architecture that mitigates information leakage by offering a simple and effective subtraction inductive bias while conditioning on a single sample. Remarkably, the resulting variational framework is simpler in terms of required loss terms, hyper-parameters, and data augmentation. We evaluate our method on multiple data-modality benchmarks including general time series, video, and audio, and we show beyond state-of-the-art results on generation and prediction tasks in comparison to several strong baselines.',
      tags: ["Diffusion Models", "Generative Modeling", "Sequential Modeling", "Time Series"],
      conference: "NeurIPS, 2024",
      authors: 'Ilan Naiman, Nimrod Berman, Idan Arbiv, Itai Pemper, Gal Fadlon, and Omri Azencot',
      githubUrl: "https://github.com/idoziv15/MortgageMaster",
      url: "https://omriazencot.com/wp-content/uploads/2024/07/dbse.pdf",
      imageUrl: "/ts2img.png"
    },
    {
        id: 2,
        title: "Utilizing Image Transforms and Diffusion Models for Generative Modeling of Short and Long Time",
        description:
          'Lately, there has been a surge in interest surrounding generative modeling of time series data. Most existing approaches are designed either to process short sequences or to handle long-range sequences. This dichotomy can be attributed to gradient issues with recurrent networks, computational costs associated with transformers, and limited expressiveness of state space models. Towards a unified generative model for varying-length time series, we propose in this work to transform sequences into images. By employing invertible transforms such as the delay embedding and the short-time Fourier transform, we unlock three main advantages: i) We can exploit advanced diffusion vision models; ii) We can remarkably process short- and long-range inputs within the same framework; and iii) We can harness recent and established tools proposed in the time series to image literature. We validate the effectiveness of our method through a comprehensive evaluation across multiple tasks, including unconditional generation, interpolation, and extrapolation. We show that our approach achieves consistently state-of-the-art results against strong baselines. In the unconditional generation tasks, we show remarkable mean improvements of 49.92% and 132.61% in the short discriminative and (ultra-)long classification scores, respectively.',
        tags: ["Representation Learning", "Sequential Disentanglement", "Sequential Modeling", "Sequential Variational Autoencoders", "Computer Vision"],
        conference: "ICML, 2024",
        authors: 'Idan Arbiv, Gal Fadlon, Nimrod Berman, Ilan Naiman, and Omri Azencot',
        githubUrl: "https://github.com/idoziv15/MortgageMaster",
        url: "https://omriazencot.com/wp-content/uploads/2024/07/dbse.pdf",
        imageUrl: "/dbse.jpg"
      }
  ];
  