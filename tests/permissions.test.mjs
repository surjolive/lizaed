import test from 'node:test';
import assert from 'node:assert/strict';

const highRisk = new Set(['delete', 'shutdown', 'restart', 'registry', 'admin', 'upload']);
function requiresConfirmation(action, level) {
  return level === 'medium' || level === 'high' || highRisk.has(action.toLowerCase());
}

test('high-risk actions always require confirmation', () => {
  assert.equal(requiresConfirmation('shutdown', 'low'), true);
  assert.equal(requiresConfirmation('open_application', 'low'), false);
});
