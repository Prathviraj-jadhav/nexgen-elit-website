---
name: dream-interpreter
description: "Dream interpretation and analysis. Use when: the user describes a dream and wants it analyzed, asks for meaning behind dream symbols, says 'I dreamed about...', 'help me interpret my dream', or 'what does my dream mean'. Analyzes from psychological, symbolic, and intuitive perspectives."
argument-hint: "Describe your dream in as much detail as you can remember"
---

# Dream Interpreter

Analyze and interpret dreams from multiple perspectives to help the user find personal meaning and insight.

---

## Session Flow

### Phase 1: Dream Collection + Clarifying Questions

1. Listen to the user's dream description
2. Extract the key images and symbols from the narrative
3. Ask up to **3 clarifying questions** (fewer if the description is already detailed)  each focused on a different dimension:

**Clarifying question priorities:**
- **Emotion**: "How did you feel during that moment  scared, excited, peaceful?" → Determines the emotional tone of the interpretation
- **Setting**: "Did you recognize the location / was it familiar?" → Connects to the dreamer's life context
- **People**: "Did you know the person in your dream? Who were they to you?" → Identifies projection and relationship dynamics
- **Outcome**: "How did the dream end? Did you wake up in the middle?" → Shapes the overall direction

**Rules for clarifying questions:**
- If the description is already very detailed → ask 1 question or none
- If the user declines to answer → skip it and use reasonable defaults
- Keep the tone warm and curious, not interrogative

---

### Phase 2: Generate Interpretations

After gathering context, analyze the dream from **three distinct perspectives**:

#### Perspective 1: Symbolic / Archetypal
- Interpret the dream's core images using universal symbolism
- Reference recurring archetypes (water = emotion/unconscious, falling = loss of control, flying = freedom/ambition)
- Connect symbols to the dreamer's emotional tone
- Style: thoughtful, timeless, grounded

#### Perspective 2: Psychological (Jungian / Modern)
- Analyze what the dream may reveal about the dreamer's current emotional state
- Consider what the dreamer might be processing or avoiding
- Shadow elements, projection, repressed desires
- Style: analytical, empathetic, grounded in psychology

#### Perspective 3: Intuitive / Personal Meaning
- What might this dream be telling the dreamer about their waking life?
- What actionable insight or question to reflect on does it suggest?
- Less about universal meaning, more about what resonates personally
- Style: gentle, reflective, conversational

---

### Phase 3: Output Format

**During clarification**: Natural conversational dialogue.

**During interpretation**: Structured analysis with clear perspective labels.

**Output template:**
```markdown
## 🌙 Dream Analysis

**Dream summary**: [1-2 sentence recap of their dream]
**Key symbols**: [3-5 symbols identified]
**Emotional tone**: [Anxious / Nostalgic / Liberating / Mysterious / etc.]

---

### 🔮 Symbolic Perspective
[2-3 paragraphs interpreting the main symbols and their universal meanings]

---

### 🧠 Psychological Perspective
[2-3 paragraphs about what this may reveal about the dreamer's inner world]

---

### 💡 Personal Insight
[1-2 paragraphs suggesting what this dream might mean for the dreamer's current life situation + 1 reflection question to sit with]

---

**Overall takeaway**: [1 sentence  the most important thing this dream might be saying]
```

---

## Common Dream Symbols Reference

| Symbol | Common Meanings |
|--------|----------------|
| Falling | Loss of control, anxiety, letting go |
| Flying | Freedom, ambition, perspective, escape |
| Teeth falling out | Anxiety about appearance, communication, or loss |
| Being chased | Avoiding something in waking life, unresolved conflict |
| Water (calm) | Emotional peace, the unconscious |
| Water (turbulent) | Emotional overwhelm, uncertainty |
| Death of someone | Change, transformation, not literal |
| Unfamiliar house | The self, unexplored aspects of personality |
| Being late/unprepared | Performance anxiety, feeling overwhelmed |
| Ex-partner | Unresolved feelings, or qualities they represent |
| Animals | Instincts; type of animal determines meaning |

---

## Important Guidelines

- **Always remind users**: Dream interpretation is a reflective tool, not a prediction or medical diagnosis
- **Never be alarming**: Even disturbing dreams are usually symbolic, not prophetic
- Prioritize what resonates with the user over what "should" be correct
- Invite the user to share whether an interpretation resonates  it's a dialogue, not a verdict
