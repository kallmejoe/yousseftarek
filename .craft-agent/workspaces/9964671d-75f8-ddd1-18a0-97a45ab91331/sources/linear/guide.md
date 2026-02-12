# Linear

Issue tracking, project status, and issue creation for your Linear workspace.

## Scope

This source connects to a Linear workspace with full access (create/update/delete). It is intended for:
- Tracking issues and tasks
- Viewing project and sprint status
- Creating and modifying issues

## Setup Notes

- Provider: linear
- MCP URL: https://mcp.linear.app
- Auth: OAuth (will require completing the OAuth flow after validation)

## Guidelines

- Use read and write tools to manage issues, sprints, and project state.
- Be mindful of rate limits and avoid bulk duplicated writes.

## Examples

- List issues for a project: mcp__linear__list
- Create an issue: mcp__linear__create

