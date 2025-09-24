export const projects = [
  {
    id: 1,
    title: "OCR In the Cloud",
    description:
      'This project is a scalable cloud-based OCR system that processes images from URLs using Amazon Web Services (AWS). Users input a text file with image URLs, and the system dynamically allocates cloud resources to download, analyze, and extract text from the images. The result is presented in an HTML file with each image and its extracted text. The architecture includes three main components—a Local application, a Manager, and Workers—using AWS services like SQS and S3 for efficient task distribution, scalability, and persistence. The system is optimized to adjust resources based on workload, providing a cost-effective solution for large-scale OCR processing.',
    tags : [
        "Cloud Computing",
        "AWS",
        "OCR",
        "Distributed Systems",
        "Java"
    ],
    githubUrl: "https://github.com/IdanArbiv/OCR-in-the-cloud",
    url: "",
    imageUrl: "/ocr_in_cloud.png"
  },
  {
    id: 2,
    title: "Real Time Connect Four",
    description:
      'The Interactive Game project develops an engaging system that enables a human player to compete against a computer in Connect Four using a physical board. Utilizing a webcam and advanced computer vision techniques, the system captures the game state in real-time, accurately detecting the positions and colors of discs. It then employs strategic algorithms to calculate the computer next move and communicates these moves verbally, enhancing interactivity. The project demonstrates high accuracy in move detection and robust performance under varying conditions, successfully bridging the gap between traditional and digital gameplay. Future enhancements may include improved board detection and support for additional colors.',
    tags: ["OpenCV", "Image Processing", "Computer Vision"],
    githubUrl: "https://github.com/IdanArbiv/4-In-a-row",
    url: "",
    imageUrl: "/open_cv.png"
  },
  {
    id: 3,
    title: "Maximum Weighted Increasing Subsequence",
    description:
      'This project focuses on the Maximum-Weighted-Increasing-Subsequence problem, which involves managing the weights of points in a two-dimensional space while maintaining the maximum chain weight of increasing subsequences. The goal is to selectively increase the weights of specific points from 1 to 2 without exceeding the maximum chain weight, thereby preserving the integrity of potential chains formed from these points. By employing both naive and heuristic approaches, the project aims to develop effective algorithms that optimize point weights while exploring complex interactions between geometric and sequential properties.',
    tags: ["Dynamic Programming", "Algorithm Design", "Data Structures"],
    githubUrl: "https://github.com/IdanArbiv/Maximum-Weighted-Increasing-Subsequence",
    url: "",
    imageUrl: "/inc_seq.PNG"
  },
  {
    id: 4,
    title: "Open Set Recognition With Contrastive Learning",
    description:
      'This project focuses on Open Set Recognition (OSR) using a CNNs to identify known classes from the MNIST dataset while effectively flagging unseen classes as Unknown. By leveraging contrastive learning and decision boundaries in the latent space, the model distinguishes between in-distribution and out-of-distribution samples. The goal is to create a robust and adaptable AI system capable of recognizing new classes in real-world scenarios, enhancing its predictive capabilities beyond closed-set environments.',
    tags: ["Computer Vision", "PyTorch", "Contrastive Learning", "Latent Representation"],
    githubUrl: "https://github.com/IdanArbiv/Open-Set-Recognition-With-Contrastive-Learning",
    url: "",
    imageUrl: "/osr.png"
  },
  {
    id: 5,
    title: "Hypernym Detection with Hadoop and OCR",
    description:
      'Implements a method for automatic hypernym discovery. It utilizes an Amazon EMR cluster to process vast datasets of Google Syntactic N-grams, constructing dependency trees to identify shortest paths between nouns, which are then used to train classifiers with WEKA. The system architecture consists of a main class and two steps scheduled via EMR, allowing for efficient data handling and classification evaluation.',
    tags: ["Hadoop", "AWS", "NLP", "WEKA"],
    githubUrl: "https://github.com/IdanArbiv/Hypernym-detection-with-Hadoop-and-OCR",
    url: "",
    imageUrl: "/hadoop.png"
  },
  {
    id: 6,
    title: "Evolutionary Algorithms Partition Problem",
    description:
      'The Problem project addresses the NP-complete partition problem, which seeks to divide a set of numbers into two subsets with equal sums. Using a Genetic Algorithm (GA) and the EC-KITY library, the project not only implements a solution to the partition problem but also enhances the library with a live graph feature to visualize algorithm performance in real-time. The implementation involves generating a random array, evaluating individuals based on fitness, and utilizing tournament selection for better results in optimizing the partitioning process.',
    tags: ["Evolutionary Algorithms", "EC-KITY", "Pandas"],
    githubUrl: "https://github.com/IdanArbiv/Partition-Problem-With-Evolutionary-Algorithms-",
    url: "",
    imageUrl: "/partition.png"
  }
];
