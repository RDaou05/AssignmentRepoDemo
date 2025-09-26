# Software Requirement Specification

## Group members
- Ahil Sarang
- Dylan Crenshaw
- Roni Daou
- Ronit Dixit
- Tianna Carter
- Aidan Makovij

## 1. Project Description

The Medicine Reminder App is a comprehensive medication management application designed to help users track, schedule, and manage their medications with intelligent reminders and adherence monitoring. Built on Firebase infrastructure, the app addresses the critical healthcare challenge of medication non-adherence, which affects millions of patients worldwide and leads to poor health outcomes.

The application provides a user-friendly interface for managing complex medication schedules, including support for various dosing patterns (fixed times, intervals, PRN, taper schedules), inventory tracking with refill reminders, and safety features such as drug interaction warnings. Advanced features include care team sharing for family members and caregivers, comprehensive adherence tracking with visual analytics, and data export capabilities for healthcare providers. The app ensures data security through encrypted storage and cloud synchronization while maintaining offline functionality for uninterrupted medication management.

## 2. Functional Requirements

| ID | Functional Requirement |
|----|------------------------|
| FR01 | User can create account |
| FR02 | User can sign in |
| FR03 | User can logout |
| FR04 | User can reset forgotten password |
| FR05 | User can add medicine |
| FR06 | User can edit medicine details |
| FR07 | User can delete medicine |
| FR08 | User can set medicine schedule |
| FR09 | User can view calendar with medicine schedule |
| FR10 | User can enable/disable notifications |
| FR11 | User can mark medicine as taken |
| FR12 | User can view medicine history |
| FR13 | User can snooze notifications |
| FR14 | User can set notification time preferences |
| FR15 | User can search medicines by name |

## 3. Non-Functional Requirements

| ID | Non-Functional Requirement |
|----|----------------------------|
| NFR01 | The system shall launch within 3 seconds and deliver notifications within 30 seconds of scheduled time |
| NFR02 | The system shall maintain 99.9% uptime for critical reminder functionality |
| NFR03 | The system shall comply with HIPAA regulations for health data protection and use end-to-end encryption |
| NFR04 | The system shall support accessibility standards (WCAG 2.1 AA) including large text and voice prompts |
| NFR05 | The system shall handle up to 100 medications per user with efficient performance |
| NFR06 | The system shall provide cross-platform compatibility (iOS/Android) with consistent user experience |

## 4. Use Case Specification

### UC01 Name: Add New Medication

**Description:** User adds a new medication to their profile with scheduling and dosage information

**Actor:** Patient/User

**Entry condition:** User is logged in and has completed onboarding

**Basic path:**
1. User selects "Add Medication" from main screen
2. System displays medication entry form
3. User searches for medication name or enters manually
4. User selects dosage form (pill, liquid, injection)
5. User enters strength and dose amount
6. User selects schedule type (fixed time, interval, PRN, etc.)
7. User sets specific times and days
8. User enters start date and optional end date
9. User sets initial inventory amount and refill threshold
10. System validates all required fields
11. System saves medication locally and syncs to cloud
12. System displays confirmation and returns to medication list

**Alternative paths:**
[A01] Medication found in database
1. System auto-populates strength options
2. User selects appropriate strength
3. Continue with step 5

[A02] PRN medication selected
1. User sets maximum doses per day
2. User sets minimum time between doses
3. Continue with step 8

**Exception paths:**
[E01] Network connection lost during save
1. System saves medication locally
2. System queues for sync when connection restored
3. System notifies user of offline save

**Business Rules:**
[BR01] Maximum 100 medications per user account
[BR02] Medication names must be unique within user profile

**Data description:**
| Name | Type | Length | Mask |
|------|------|--------|------|
| medication_name | String | 100 | Required |
| strength | Decimal | 10,2 | Required |
| dosage_form | Enum | - | pill/liquid/injection |
| schedule_type | Enum | - | fixed/interval/prn/taper |
| dose_times | Array | - | HH:MM format |

**Prototype:** [PRO01] Medication entry form with search field, dropdown menus for dosage form and schedule type, time picker for dose times

[PRO02] Confirmation screen showing medication summary with edit and save options

---

### UC02 Name: Process Medication Reminder

**Description:** System delivers reminder notification and processes user response

**Actor:** System (Primary), User (Secondary)

**Entry condition:** Scheduled medication time has arrived and user has active reminders enabled

**Basic path:**
1. System calculates next due medication based on schedule
2. System generates push notification with medication details
3. System displays notification on user device
4. User opens notification and views reminder details
5. User selects "Taken" action
6. System prompts for actual intake time and dose confirmation
7. User confirms intake details
8. System records intake event with timestamp
9. System decrements medication inventory
10. System updates adherence statistics
11. System schedules next reminder based on medication schedule

**Alternative paths:**
[A01] User selects "Snooze"
1. System displays snooze duration options (5, 10, 30 minutes)
2. User selects snooze duration
3. System schedules reminder for selected time
4. System tracks snooze count for escalation

[A02] User selects "Skip"
1. System prompts for skip reason (optional)
2. User enters reason or selects from predefined options
3. System records missed dose event
4. System updates adherence statistics

**Exception paths:**
[E01] User doesn't respond to notification within grace period
1. System marks dose as missed after 2 hours
2. System sends escalated reminder if enabled
3. System notifies caregivers if configured

**Business Rules:**
[BR01] Maximum 3 snoozes per reminder before marking as missed
[BR02] Grace period for late doses is 2 hours from scheduled time

**Data description:**
| Name | Type | Length | Mask |
|------|------|--------|------|
| scheduled_time | DateTime | - | YYYY-MM-DD HH:MM |
| actual_time | DateTime | - | YYYY-MM-DD HH:MM |
| dose_amount | Decimal | 10,2 | Required |
| user_action | Enum | - | taken/skipped/snoozed |
| notes | String | 500 | Optional |

**Prototype:** [PRO01] Push notification with medication name, dose, and action buttons (Taken, Snooze, Skip)

[PRO02] Intake confirmation dialog with time adjustment and dose amount fields

---

### UC03 Name: View Adherence Dashboard

**Description:** User views comprehensive medication adherence statistics and history

**Actor:** Patient/User

**Entry condition:** User is logged in and has medication intake history

**Basic path:**
1. User navigates to "Adherence" section from main menu
2. System calculates adherence statistics for all medications
3. System displays overall adherence percentage for current week/month
4. System shows individual medication adherence rates
5. System displays streak information (current and longest)
6. User selects specific medication for detailed view
7. System shows calendar view with taken/missed/skipped doses
8. System displays trend graph for selected time period
9. User can filter by date range or specific medications
10. System updates display based on selected filters

**Alternative paths:**
[A01] User selects export option
1. System prompts for export format (PDF/CSV)
2. User selects date range for export
3. System generates report with adherence data
4. System provides download link or sharing options

[A02] User views weekly summary
1. System displays week-by-week adherence comparison
2. System highlights improvement or decline trends
3. System provides motivational messages based on performance

**Exception paths:**
[E01] Insufficient data for statistics
1. System displays message about minimum data requirements
2. System shows available data with limited statistics
3. System encourages continued medication logging

**Business Rules:**
[BR01] Adherence percentage calculated as (taken doses / scheduled doses) * 100
[BR02] Streak resets to zero after any missed dose

**Data description:**
| Name | Type | Length | Mask |
|------|------|--------|------|
| adherence_percentage | Decimal | 5,2 | 0.00-100.00 |
| current_streak | Integer | - | Days count |
| longest_streak | Integer | - | Days count |
| date_range | DateRange | - | Start/End dates |
| medication_filter | Array | - | Medication IDs |

**Prototype:** [PRO01] Dashboard with circular progress indicators for adherence percentages, streak counters, and medication list

[PRO02] Calendar view with color-coded dots for taken (green), missed (red), and skipped (yellow) doses