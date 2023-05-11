npx expo run:android to run android

WatermelonDB fields that are always auto generated:
    - id: The primary key for the record.
    - created_at: The timestamp for when the record was created.
    - updated_at: The timestamp for when the record was last updated.

Navigation:
    - Core pages to be navigated via a bottom tab navigation system
        - react-navigation/bottom-tabs or BottomNavigation(react-native-paper)
    - Individual pages under core pages (vehicles, parts etc...) should be loaded via stack navigation

ToDo:
    - Setup SpeedDial from react-native-elements
        - Walkthrough: https://www.youtube.com/watch?v=OlLHiIkZFmI&list=PLS1QulWo1RIb_tyiPyOghZu_xSiCkB1h4&index=63
        - From Home(Posts), Garage, Parts Shelf and Ideas/Inspiration provide a speeddial with links to add any of the 4 items