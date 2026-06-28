"""Compatibility wrapper for the old 144 generator name.

The active system is now:

    24 solar-term cognition phases × 12 daily light-heat phases = 288 types

Use tools/generate_288_solar_term_personality_docs.py directly in new workflows.
This wrapper is kept only so older local commands fail less abruptly.
"""

from generate_288_solar_term_personality_docs import main

if __name__ == '__main__':
    main()
