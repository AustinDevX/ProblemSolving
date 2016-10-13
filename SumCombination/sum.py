import unittest
import copy

class IntegerSumCombinationTests(unittest.TestCase):
    def test_finds_correct_combination(self):
        test_nums = [5, 3, 2, 4, 11]
        test_sum  = 13
        solution  = (2, 4)

        result    =  comb_sum(test_nums, test_sum)
        self.assertEqual(solution, result, 'Incorrect Solution')

    def test_does_not_mutate_list(self):
        test_nums = [5, 3, 2, 4, 11]
        mod_test_nums = copy.copy(test_nums)

        test_sum  = 13
        comb_sum(mod_test_nums, test_sum)
        self.assertEqual(mod_test_nums, test_nums, 'List has been mutated')

def comb_sum(nums, total):  # sum is a builtin :'(
    for i in range(0, len(nums) - 1):           # iterate over the list
        nums[0], nums[i] = nums[i], nums[0]     # consecutively placing the current number to the front
        for j in range(1, len(nums)):           # test combinations starting from the next number
            if nums[0] + nums[j] == total:
                a, b = i, j
        nums[0], nums[i] = nums[i], nums[0]     # return list to original form
    return (-1, -1) if a is None else (a, b)
