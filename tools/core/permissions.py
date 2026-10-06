"""Phase 1 permission vocabulary; enforcement is required before tool execution."""
from enum import StrEnum

class PermissionLevel(StrEnum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"

HIGH_RISK_ACTIONS = frozenset({"delete", "shutdown", "restart", "registry", "admin", "upload"})


def requires_confirmation(action: str, level: PermissionLevel) -> bool:
    return level in {PermissionLevel.MEDIUM, PermissionLevel.HIGH} or action.lower() in HIGH_RISK_ACTIONS
