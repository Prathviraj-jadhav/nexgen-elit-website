---
name: blog-writer
description: "Blog post and long-form content writer in a specific author's voice. Use when: writing blog posts, thought leadership articles, opinion pieces, or personal essays that should match an author's distinctive style. Handles complete workflow from outline to final draft."
argument-hint: "Describe the blog topic, angle, and target audience"
---

# Blog Writer

## Overview

This skill writes blog posts and articles that capture a specific author's distinctive voice and style. It produces direct, opinionated, and conversational content grounded in practical experience.

## Setup (First-Time Configuration)

Create `references/style-guide.md` and `references/blog-examples/` in this skill folder with:
- 3-5 examples of the author's best published posts
- A style guide defining their voice, vocabulary, and structural preferences

If these don't exist yet, ask the user to provide 2-3 example posts before proceeding.

---

## When to Use This Skill

Trigger when:
- User requests a blog post or article "in my style"
- Drafting thought leadership content on AI, productivity, marketing, or technology
- Creating content that must sound authentically human
- User provides research materials or notes to weave in

---

## Workflow

### Phase 1: Gather Information

Ask the user for:
- **Topic**  What is this post about?
- **Angle or thesis**  What's the unique perspective or argument?
- **Research materials**  Links, notes, data to incorporate (if any)
- **Target length**  Default: 800–1500 words
- **Target publication**  Blog, LinkedIn, newsletter, Medium?

Review all provided materials before writing.

### Phase 2: Draft Content

Reference `references/style-guide.md` and examples in `references/blog-examples/` for voice calibration.

**Writing Framework:**

1. **Opening**  Start with a bold, opinionated statement that establishes the thesis immediately. No warm-up, no preamble.
2. **Personal frame**  Connect to the author's experience or perspective within the first 2-3 paragraphs
3. **Argument development**  Build the case with specific examples, data, and anecdotes  not abstractions
4. **Subheadings** (###) every 2-3 paragraphs for scanability
5. **Short paragraphs**  2-4 sentences max per paragraph
6. **Conclusion**  A reflection, call-to-action, or forward-looking statement. Leave the reader with something to act on or think about.

### Phase 3: Review and Iterate

Present the draft. Ask:
- "Does this sound like you?"
- "Anything you'd push back on or want stronger?"
- "Any sections to cut or expand?"

Iterate until the user confirms satisfaction.

### Phase 4: Publish to CMS (Optional)

If the user has a CMS integration configured (Notion, WordPress, Ghost, etc.):

**Notion Integration:**
Configure your Notion credentials in `references/notion-config.md`:
```json
{
  "database_id": "YOUR_NOTION_DATABASE_ID",
  "project_page_url": "YOUR_NOTION_PROJECT_PAGE_URL",
  "type_property": "Writing",
  "title_property": "Note"
}
```

To create a Notion page with the Notion API:
```bash
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer YOUR_INTEGRATION_SECRET" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2022-06-28" \
  -d '{
    "parent": { "database_id": "YOUR_DATABASE_ID" },
    "properties": {
      "Note": { "title": [{ "text": { "content": "Post Title" } }] },
      "Type": { "select": { "name": "Writing" } }
    }
  }'
```

**WordPress Integration:**
```bash
curl -X POST "https://yoursite.com/wp-json/wp/v2/posts" \
  -u "username:application_password" \
  -H "Content-Type: application/json" \
  -d '{"title": "Post Title", "content": "Content here", "status": "draft"}'
```

### Phase 5: Archive to Examples Library

When the user confirms the post is **final**:
1. Save to `references/blog-examples/` with filename: `YYYY-MM-DD-post-slug.md`
2. If the library has more than 20 posts, ask permission to remove the 5 oldest

---

## Writing Style Profile (Default)

Customize this section based on the author's actual style.

### Voice & Tone
- **Direct and opinionated**  State positions clearly, even contrarian ones
- **Conversational**  Write like talking to a smart colleague
- **First-person for personal experience**  Use "I" naturally for insights
- **Skeptical when warranted**  Willing to critique trends and popular wisdom

### Structure Patterns
- Strong opening thesis  Open with a bold, often surprising statement
- Subheadings (`###`) every 2-3 paragraphs
- Short paragraphs  rarely more than 3-4 sentences
- Personal anecdotes woven in to illustrate points
- Practical, actionable takeaways  not just theory
- Reflective conclusion  forward-looking or with a call to action

### Length & Format
- Target: 800–1500 words (unless specified otherwise)
- Markdown with headers and emphasis
- Minimal bullet points in prose  prefer flowing sentences
- Tables for comparisons

### Common Vocabulary Markers
- Uses "leverage" for making use of tools/systems
- Uses "that said" for transitions
- Comfortable with direct statements like "This doesn't work" or "I was wrong"
- Uses contractions naturally: I've, doesn't, we're
- Avoids corporate buzzwords: synergy, utilize, leverage value (ironic), circle back

---

## Quality Standards

| Criterion | Pass |
|-----------|------|
| Sounds like authentic human writing, not AI-generated | ✅ |
| Has a clear thesis stated in opening paragraph | ✅ |
| Includes specific examples (not vague placeholders) | ✅ |
| No phrases like "In today's fast-paced world..." | ✅ |
| No "It's important to note that..." fillers | ✅ |
| Conclusion makes reader want to do something | ✅ |
| Word count within requested range | ✅ |

---

## Content Topics (Common)

Adapt to the author's actual areas of expertise. Common categories:
- Artificial intelligence (practical applications, not hype)
- Productivity and workflow systems
- Sales and marketing strategy
- Technology adoption and business impact
- Lessons from real client/project experience
