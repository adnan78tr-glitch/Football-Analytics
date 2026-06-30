export function detectFixtureEvents(previous, current) {
  const events = [];

  if (!previous) {
    events.push({
      event_type: "MATCH_STARTED",
      team_side: "MATCH",
      old_value: null,
      new_value: "LIVE"
    });

    return events;
  }

  // HOME GOAL
  if (current.home_score > previous.home_score) {
    events.push({
      event_type: "GOAL_HOME",
      team_side: "HOME",
      old_value: previous.home_score,
      new_value: current.home_score
    });
  }

  // AWAY GOAL
  if (current.away_score > previous.away_score) {
    events.push({
      event_type: "GOAL_AWAY",
      team_side: "AWAY",
      old_value: previous.away_score,
      new_value: current.away_score
    });
  }

  // HOME YELLOW
  if (current.home_yellow_cards > previous.home_yellow_cards) {
    events.push({
      event_type: "YELLOW_HOME",
      team_side: "HOME",
      old_value: previous.home_yellow_cards,
      new_value: current.home_yellow_cards
    });
  }

  // AWAY YELLOW
  if (current.away_yellow_cards > previous.away_yellow_cards) {
    events.push({
      event_type: "YELLOW_AWAY",
      team_side: "AWAY",
      old_value: previous.away_yellow_cards,
      new_value: current.away_yellow_cards
    });
  }

  // HOME RED
  if (current.home_red_cards > previous.home_red_cards) {
    events.push({
      event_type: "RED_HOME",
      team_side: "HOME",
      old_value: previous.home_red_cards,
      new_value: current.home_red_cards
    });
  }

  // AWAY RED
  if (current.away_red_cards > previous.away_red_cards) {
    events.push({
      event_type: "RED_AWAY",
      team_side: "AWAY",
      old_value: previous.away_red_cards,
      new_value: current.away_red_cards
    });
  }

  // MINUTE
  if (current.minute !== previous.minute) {
    events.push({
      event_type: "MINUTE_CHANGED",
      team_side: "MATCH",
      old_value: previous.minute,
      new_value: current.minute
    });
  }

  // STATUS
  if (current.match_status !== previous.match_status) {
    events.push({
      event_type: "STATUS_CHANGED",
      team_side: "MATCH",
      old_value: previous.match_status,
      new_value: current.match_status
    });

    if (current.match_status === 1) {
      events.push({
        event_type: "MATCH_STARTED",
        team_side: "MATCH"
      });
    }

    if (current.match_status === 2) {
      events.push({
        event_type: "FIRST_HALF_END",
        team_side: "MATCH"
      });
    }

    if (current.match_status === 3) {
      events.push({
        event_type: "SECOND_HALF_STARTED",
        team_side: "MATCH"
      });
    }

    if (current.match_status === 4) {
      events.push({
        event_type: "MATCH_FINISHED",
        team_side: "MATCH"
      });
    }
  }

  return events;
}