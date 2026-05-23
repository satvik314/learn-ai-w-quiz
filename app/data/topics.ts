export type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  questions: Question[];
};

export const topics: Topic[] = [
  {
    id: "llms",
    title: "Large Language Models",
    icon: "[ LLM ]",
    blurb: "Decode the magic behind GPT, Claude & friends.",
    questions: [
      {
        question: "What does the 'T' in GPT stand for?",
        options: ["Translator", "Transformer", "Tokenizer", "Transducer"],
        answer: 1,
        explanation: "GPT = Generative Pre-trained Transformer. The Transformer architecture (2017) is the backbone of modern LLMs.",
      },
      {
        question: "What is a 'token' in an LLM?",
        options: [
          "A user authentication key",
          "A unit of text the model processes (a word or sub-word)",
          "A type of GPU",
          "A reward signal in training",
        ],
        answer: 1,
        explanation: "LLMs split text into tokens (often sub-word chunks). Roughly 1 token ≈ 4 characters in English.",
      },
      {
        question: "What does 'temperature' control during generation?",
        options: [
          "How hot the GPUs run",
          "The randomness/creativity of the output",
          "Training speed",
          "Token vocabulary size",
        ],
        answer: 1,
        explanation: "Higher temperature = more random, diverse outputs. Lower = more deterministic and focused.",
      },
      {
        question: "What is RLHF?",
        options: [
          "Random Linear Hidden Function",
          "Reinforcement Learning from Human Feedback",
          "Recurrent Layer Hyper-Fitting",
          "Rapid Loss Histogram Filter",
        ],
        answer: 1,
        explanation: "RLHF aligns LLMs with human preferences by training a reward model on human rankings of outputs.",
      },
      {
        question: "What is the 'context window' of an LLM?",
        options: [
          "The UI panel where you type",
          "The max number of tokens it can read at once",
          "The number of GPUs used",
          "The time it has to respond",
        ],
        answer: 1,
        explanation: "Context window is the model's working memory — the cap on input + output tokens per request.",
      },
    ],
  },
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    icon: "[ ML  ]",
    blurb: "Loss functions, gradients, and the bias-variance dance.",
    questions: [
      {
        question: "Which is an example of supervised learning?",
        options: [
          "Grouping customers by behavior",
          "Predicting house prices from labeled examples",
          "An agent learning to play chess by self-play",
          "Compressing images with an autoencoder",
        ],
        answer: 1,
        explanation: "Supervised learning uses labeled (input, output) pairs. The others are clustering, RL, and unsupervised.",
      },
      {
        question: "What does 'overfitting' mean?",
        options: [
          "Model is too small for the data",
          "Model memorizes training data but fails on new data",
          "Model trains too quickly",
          "Model uses too much memory",
        ],
        answer: 1,
        explanation: "Overfit models nail the training set but generalize poorly. Regularization & more data help.",
      },
      {
        question: "What's the purpose of a loss function?",
        options: [
          "To measure how wrong the model's predictions are",
          "To delete bad data",
          "To save model weights",
          "To choose the optimizer",
        ],
        answer: 0,
        explanation: "Loss quantifies error. Training minimizes loss via gradient descent.",
      },
      {
        question: "Which technique helps prevent overfitting?",
        options: ["Increase model size", "Dropout", "Remove validation set", "Train longer"],
        answer: 1,
        explanation: "Dropout randomly zeroes activations during training, forcing redundancy and improving generalization.",
      },
      {
        question: "What is gradient descent?",
        options: [
          "A way to label data",
          "An algorithm that updates weights in the direction that reduces loss",
          "A type of neural network",
          "A data augmentation trick",
        ],
        answer: 1,
        explanation: "It nudges parameters opposite to the gradient of the loss — the core of nearly all ML training.",
      },
    ],
  },
  {
    id: "neural-nets",
    title: "Neural Networks",
    icon: "[ NN  ]",
    blurb: "Layers, weights & the perceptrons that started it all.",
    questions: [
      {
        question: "What does an activation function do?",
        options: [
          "Stores the weights",
          "Introduces non-linearity into the network",
          "Picks the optimizer",
          "Selects the dataset",
        ],
        answer: 1,
        explanation: "Without non-linear activations (ReLU, sigmoid, etc.), stacked layers collapse into a linear model.",
      },
      {
        question: "What is backpropagation?",
        options: [
          "Sending data back to the server",
          "An algorithm that computes gradients by propagating errors backward through the network",
          "A way to reverse-engineer a model",
          "Reversing the order of layers",
        ],
        answer: 1,
        explanation: "Backprop uses the chain rule to efficiently compute gradients for every weight.",
      },
      {
        question: "What does ReLU do?",
        options: [
          "Returns max(0, x)",
          "Returns sin(x)",
          "Returns 1/(1+e^-x)",
          "Returns the absolute value",
        ],
        answer: 0,
        explanation: "ReLU = Rectified Linear Unit. Fast, sparse, and avoids the vanishing-gradient pain of sigmoid.",
      },
      {
        question: "What kind of network is best suited for images?",
        options: ["RNN", "CNN", "Transformer-only (no patches)", "GAN exclusively"],
        answer: 1,
        explanation: "CNNs (Convolutional Neural Networks) exploit spatial locality with convolution filters.",
      },
      {
        question: "What is a 'weight' in a neural network?",
        options: [
          "The model file's size in MB",
          "A learnable parameter that scales an input signal",
          "The training data size",
          "A type of loss function",
        ],
        answer: 1,
        explanation: "Weights are tunable parameters updated during training. They define what the network has learned.",
      },
    ],
  },
  {
    id: "vision",
    title: "Computer Vision",
    icon: "[ CV  ]",
    blurb: "Pixels in, predictions out.",
    questions: [
      {
        question: "What does object detection produce?",
        options: [
          "A single class label for the whole image",
          "Bounding boxes plus class labels for objects",
          "A pixel-perfect segmentation mask only",
          "A text caption",
        ],
        answer: 1,
        explanation: "Detection = where (boxes) + what (labels). Classification only gives 'what' for the entire image.",
      },
      {
        question: "What's the difference between classification and segmentation?",
        options: [
          "Nothing, they're the same",
          "Classification labels the image; segmentation labels every pixel",
          "Segmentation only works on videos",
          "Classification needs more data",
        ],
        answer: 1,
        explanation: "Segmentation produces a per-pixel map (semantic or instance), giving precise object shapes.",
      },
      {
        question: "What is a convolution operation?",
        options: [
          "Sliding a small filter over an image to extract features",
          "Rotating the image",
          "Compressing the image to JPEG",
          "Flipping pixels randomly",
        ],
        answer: 0,
        explanation: "Convolutions detect local patterns (edges, textures) and are the building block of CNNs.",
      },
      {
        question: "What does a Vision Transformer (ViT) do?",
        options: [
          "Splits an image into patches and treats them like tokens",
          "Uses RNNs over pixel rows",
          "Only works for black-and-white images",
          "Replaces all images with text",
        ],
        answer: 0,
        explanation: "ViTs flatten image patches into a sequence and apply the Transformer architecture to them.",
      },
      {
        question: "What is data augmentation in CV?",
        options: [
          "Buying more labeled data",
          "Creating new training samples via flips, crops, rotations, etc.",
          "Increasing image resolution at inference",
          "Doubling the network depth",
        ],
        answer: 1,
        explanation: "Augmentation expands the effective dataset and improves generalization without new labels.",
      },
    ],
  },
  {
    id: "ethics",
    title: "AI Ethics",
    icon: "[ETHIC]",
    blurb: "Bias, alignment, and the human in the loop.",
    questions: [
      {
        question: "What is algorithmic bias?",
        options: [
          "When the model runs slowly",
          "When a model produces systematically unfair outcomes for certain groups",
          "When the loss function is biased",
          "A bug in the optimizer",
        ],
        answer: 1,
        explanation: "Bias often stems from skewed training data or design choices, and can cause real-world harm.",
      },
      {
        question: "What does 'AI alignment' mean?",
        options: [
          "Aligning servers in a data center",
          "Ensuring AI systems pursue goals consistent with human values",
          "Lining up training examples",
          "Compressing model weights",
        ],
        answer: 1,
        explanation: "Alignment is about making capable AI systems behave in ways their designers and users intend.",
      },
      {
        question: "What is a 'hallucination' by an LLM?",
        options: [
          "When the GPU overheats",
          "When the model confidently produces false or fabricated information",
          "An image-generation feature",
          "A debugging tool",
        ],
        answer: 1,
        explanation: "Hallucinations are plausible-sounding but incorrect outputs. Retrieval & grounding help reduce them.",
      },
      {
        question: "Why is 'explainability' important in AI?",
        options: [
          "It speeds up training",
          "It helps users and regulators understand and trust model decisions",
          "It reduces GPU cost",
          "It is required by all programming languages",
        ],
        answer: 1,
        explanation: "Especially in healthcare, finance, and law, knowing *why* a model decided something matters.",
      },
      {
        question: "What is 'human-in-the-loop'?",
        options: [
          "A horror movie franchise",
          "Workflow where humans review or correct AI outputs",
          "A type of recurrent network",
          "A way to train without data",
        ],
        answer: 1,
        explanation: "HITL keeps a human reviewer involved in high-stakes decisions to catch errors and add judgment.",
      },
    ],
  },
];

export const getTopic = (id: string) => topics.find((t) => t.id === id);
