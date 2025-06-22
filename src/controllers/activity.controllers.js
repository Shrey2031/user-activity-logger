import {Activity} from '../models/Activity.models.js';
import {asyncHandler} from '../utils/AsyncHandler.js';

// @desc    Log a user activity
// @route   POST /api/activity/log
// @access  Private
export const logActivity = asyncHandler(async (req, res) => {
  const { action, page } = req.body;

  if (!action || !['login', 'logout', 'view'].includes(action)) {
    res.status(400);
    throw new Error('Invalid or missing action type');
  }

  const activity = new Activity({
    user: req.user._id, // set by JWT middleware
    action,
    page: action === 'view' ? page : null
  });

  const saved = await activity.save();
  res.status(201).json({ success: true, activity: saved });
});

// @desc    Get user activities (with filters & pagination)
// @route   GET /api/activity
// @access  Private
export const getActivities = asyncHandler(async (req, res) => {
  const { action, startDate, endDate, page = 1, limit = 10 } = req.query;

  const query = { user: req.user._id }; // users can see only their logs

  if (action) query.action = action;

  if (startDate || endDate) {
    query.timestamp = {};
    if (startDate) query.timestamp.$gte = new Date(startDate);
    if (endDate) query.timestamp.$lte = new Date(endDate);
  }

  const skip = (page - 1) * limit;

  const [activities, total] = await Promise.all([
    Activity.find(query)
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(Number(limit)),
    Activity.countDocuments(query)
  ]);

  res.json({
    success: true,
    page: Number(page),
    totalPages: Math.ceil(total / limit),
    totalResults: total,
    activities
  });
});
