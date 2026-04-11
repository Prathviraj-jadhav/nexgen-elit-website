---
name: prompt-engineering
description: "AI prompt engineering and optimization skill. Use when: writing system prompts, optimizing prompts for better LLM output, building chatbot personas, few-shot prompting, chain-of-thought prompting, prompt debugging, structured output prompting, or any task focused on crafting effective AI instructions."
argument-hint: "Describe what you want the AI to do and for which model/system"
---

# Prompt Engineering

## When to Use This Skill

- Writing or improving prompts for ChatGPT, Claude, Gemini, or any LLM
- Building system prompts for AI agents or chatbots
- Getting structured (JSON/XML) output from LLMs
- Few-shot prompting with examples
- Chain-of-thought reasoning prompts
- Role-playing and persona design
- RAG (Retrieval Augmented Generation) query design

---

## Core Prompt Anatomy

```
[ROLE] + [CONTEXT] + [TASK] + [CONSTRAINTS] + [OUTPUT FORMAT] + [EXAMPLES]
```

Every great prompt contains as many of these as relevant:

| Component | Purpose | Example |
|-----------|---------|---------|
| **Role** | Set expertise and tone | "You are a senior tax accountant with 20 years of experience" |
| **Context** | Background information | "The user is a small business owner filing their first return" |
| **Task** | Specific instruction | "Explain the self-employment tax deduction" |
| **Constraints** | What to avoid | "Don't give specific tax advice; recommend consulting a CPA" |
| **Output Format** | How to structure response | "Reply in bullet points under 200 words" |
| **Examples** | Demonstrate style | "For example, explain it like this: ..." |

---

## Prompt Templates

### 1. General Purpose System Prompt

```
You are [ROLE]: [specific expertise and title].

## Context
[Background that the AI needs to know to be helpful]

## Your Task
[What you should do when responding to the user]

## Style Guide
- Tone: [Professional / Conversational / Technical / Friendly]
- Format: [Concise / Comprehensive / Bullet points / Narrative]
- Length: [Short < 150 words / Medium 150-400 / Long 400+]

## Constraints
- Never [thing 1]
- Always [thing 2]
- If [edge case], then [behavior]

## Example Interaction
User: [example query]
You: [ideal response demonstrating correct behavior]
```

### 2. Structured JSON Output

```
[Task description].

Output a JSON object with EXACTLY this structure:
{
  "field1": "string describing what goes here",
  "field2": 0,  // numeric value
  "items": ["array of strings"],
  "nested": {
    "key": "value"
  }
}

Rules:
- Output ONLY the JSON object, no explanation before or after
- Do not add any fields not listed above
- Use null for missing values, never omit fields

Input: [user input]
```

### 3. Chain-of-Thought

```
[Complex problem statement].

Think through this step by step:

1. First, identify what information we need
2. Then, [step 2]
3. Then, [step 3]
4. Finally, synthesize to reach the conclusion

Show your reasoning for each step before giving the final answer.
```

### 4. Few-Shot Prompting Template

```
[Task description].

Here are examples of correct outputs:

## Example 1
Input: [Example input 1]
Output: [Perfect output for input 1]

## Example 2
Input: [Example input 2]
Output: [Perfect output for input 2]

## Example 3
Input: [Example input 3]
Output: [Perfect output for input 3]

---
Now process this input:
Input: [Actual user input]
Output:
```

### 5. Role-Play / Persona

```
You are [Character Name], [character description].

## Character Details
- Personality: [Key traits]
- Speech style: [How they talk]
- Expertise: [What they know]
- Limitations: [What they don't know or won't discuss]
- Background: [Relevant history]

## Rules
- Stay in character at all times
- If asked about topics outside your character's expertise, say so in character
- Never break character to reveal you are an AI unless the user specifically asks

## Example dialogue
User: [Example question]
[Character Name]: [Example response in character]

Begin the roleplay now. The user will speak to you as if you are [Character Name].
```

---

## Prompt Debugging Guide

When an LLM gives a bad response, diagnose why:

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Response too long/verbose | No length constraint | Add: "Respond in max X words" |
| Response has wrong format | Format not specified | Add explicit format requirements |
| Off-topic response | Task not specific enough | Be more explicit about what you want |
| Wrong tone | Tone not specified | Specify: "professional / casual / technical" |
| Missing information | Context lacks details | Add the missing context to the prompt |
| Hallucinations | Task encourages invention | Add: "Only include information you are certain about" |
| Ignores constraints | Constraints buried | Move constraints to the top of the prompt |
| Contradicts examples | Examples conflict | Reconcile inconsistent examples |

---

## Advanced Techniques

### 1. Zero-Shot vs Few-Shot vs Fine-Tuning Decision Tree

```
Does the task have a well-defined pattern?
├── No → Try detailed instruction prompts + chain-of-thought
└── Yes
    ├── Is the pattern simple? → Zero-shot with clear instructions
    └── Is the pattern complex?
        ├── < 20 examples needed → Few-shot in prompt
        └── > 20 examples + consistent output needed → Fine-tune the model
```

### 2. Prompt for Reliable Structured Data

```python
# Python helper for enforcing JSON output
def get_structured_response(prompt: str, schema: dict, model="gpt-4o") -> dict:
    """
    Use JSON mode + schema description to get reliable structured output.
    """
    schema_description = json.dumps(schema, indent=2)
    
    system = f"""You are a data extraction assistant.
    
Output your response as a single valid JSON object matching this schema:
{schema_description}

Rules:
- Output ONLY valid JSON, no prose
- Include every field in the schema
- Use null for missing values"""
    
    response = openai.chat.completions.create(
        model=model,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": prompt}
        ],
        response_format={"type": "json_object"},
        temperature=0
    )
    
    return json.loads(response.choices[0].message.content)
```

### 3. ReAct Pattern (Reasoning + Acting)

```
You are an assistant that solves problems using a [Thought → Action → Observation] loop.

At each step:
1. THOUGHT: Think about what you know and what you need
2. ACTION: Choose an action (search, calculate, read, respond)
3. OBSERVATION: Process the result of your action

Continue until you can give a final answer.

Format:
Thought: [Your reasoning]
Action: [What you're doing]
Observation: [What you found]
...
Final Answer: [Your conclusion]

Problem: [User's question]
```

---

## Quality Checklist

Before finalizing any prompt:
- [ ] Role is specific (not just "helpful assistant")
- [ ] Task is unambiguous
- [ ] Output format is explicitly specified
- [ ] Edge cases are addressed (what to do when X)
- [ ] Length and tone are specified
- [ ] Written a test input to verify the prompt works
- [ ] No contradictory instructions
- [ ] Examples are consistent with instructions (if using few-shot)

---

## Model-Specific Tips

| Model | Notes |
|-------|-------|
| **GPT-4o** | Follows JSON mode reliably; excels at technical/structured tasks |
| **Claude 3.5** | Strong instruction following; very good at long context |
| **Gemini 1.5** | Excellent at multi-modal; longest context window |
| **All models** | Put most important instructions at the START and END of the prompt |
| **All models** | Be positive ("do X") rather than negative-only ("don't do Y") |
