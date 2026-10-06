"""Common tool contract. Implementations must return observed results."""
from dataclasses import dataclass, field
from typing import Any, Protocol

@dataclass(frozen=True)
class ToolResult:
    success: bool
    message: str
    data: dict[str, Any] = field(default_factory=dict)
    verified: bool = False

class Tool(Protocol):
    name: str
    permission_level: str
    def execute(self, parameters: dict[str, Any]) -> ToolResult: ...
    def verify(self, result: ToolResult) -> bool: ...
